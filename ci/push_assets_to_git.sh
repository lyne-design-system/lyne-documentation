#!/bin/bash

# this script is used in .travis.yml

# this script is being made executable with
# chmod ugo+x push_assets_to_git.sh

# set flags for execution of this file:
# -e: make sure command returns non-zero exit code as soon as somehting fails
set -e

# version file name written by .releaserc
VERSION_FILE=dist/version.txt

if [ -f "$VERSION_FILE" ];
then
  VERSION="$(cat .version)"

  echo "VERSION"
  echo $VERSION

  if [ $VERSION == 0.0.0 ]
  then
    echo "-->> No version file found, therefore manually push package.json back"

    git add package.json
    git add package-lock.json
    git commit -m "chore: updating lyne-components, lyne-icons, lyne-design-tokens"
    git push origin master
  else
    echo "-->> Version file found. Semantic-release will automatically push package.json back to git"
  fi

fi
