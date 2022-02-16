#!/usr/bin/env bash

#export USE_HARD_LINKS=false


echo "Build and release client app."

rm -rf dist/*

echo "Copy package.json..."
cp -P build/package.json dist/package.json


echo "Generate client resources..."
npm run generate-res

echo "Build angular..."
ng build --configuration production

echo "Build electron..."
npm run build:electron

echo "Build client app..."
electron-builder -mw -c ./build/electron-builder.yml

echo "All Done."

