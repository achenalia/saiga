#!/bin/bash
set -e

# 0) Output directory
OUTPUT_DIR="new_vers_pack"
mkdir -p "$OUTPUT_DIR"

# 1) Install dependencies
npm ci

# 2) Build your project (Vite -> dist/)
npm run build

# 3) Bump version in manifest.json using jq
CURVER=$(jq -r '.version' manifest.json)
IFS='.' read -r MA MI PA <<< "$CURVER"
PA=$((PA+1))
NEWVER="$MA.$MI.$PA"

jq --arg v "$NEWVER" '.version=$v' manifest.json > manifest.tmp && mv manifest.tmp manifest.json
echo "Bumped manifest version to: $NEWVER"

# 4) Prepare staging directory with versioned name INSIDE new_vers_pack/
DIR_NAME="${OUTPUT_DIR}/saiga_${NEWVER}"

rm -rf "$DIR_NAME"
mkdir "$DIR_NAME"

# Copy manifest.json and built files
cp manifest.json "$DIR_NAME/"
cp -r dist/* "$DIR_NAME/"

# 5) Optional lint with web-ext
web-ext lint --source-dir="$DIR_NAME" || echo "web-ext lint reported issues"

# 6) Create ZIP inside new_vers_pack/
ZIP_NAME="${OUTPUT_DIR}/saiga_${NEWVER}.zip"
rm -f "$ZIP_NAME"
zip -r "$ZIP_NAME" "$DIR_NAME"

# 7) List result
ls -lh "$ZIP_NAME"
echo "Done. Package located in: $OUTPUT_DIR/"
