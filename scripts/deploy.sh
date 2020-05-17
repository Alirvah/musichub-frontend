#!/bin/bash

BASEPATH="/opt/frontend/"

echo "Adjusting permissions of git-files to root:shcsaltadmin"

echo "Rolling out..."
echo "Synchronizing git..."

rsync -a --progress --exclude ".git*" --exclude "README.md" ./ $BASEPATH
rm -r /opt/frontend/node_modules/* /opt/frontend/build/*

cd $BASEPATH
npm install
CI=false
npm run-script build

chown -R root:www $BASEPATH

exit 0
