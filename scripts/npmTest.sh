#!/bin/bash

export HTTP_PROXY=10.171.94.50:6080
export HTTPS_PROXY=10.171.94.50:6080

npm install

timeout 60s npm start

if [ "$?" == "124" ]; then  #timeouted
    exit 0
else
    exit 1
fi


