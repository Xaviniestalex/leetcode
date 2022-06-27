#!/bin/bash
#set -x
#
GREEN='\033[0;32m'
LCYAN='\033[1;36m' # Light Cyan
NC='\033[0m' # No Color

echo "Hello, $(whoami)!"

echo -e "${LCYAN}Please enter question no. and name (e.g. 0001-Two-Sum):${NC}"

read question

folder=./questions
template=template

cp -r $folder/$template $folder/$question

echo -e "Folder ${GREEN}$question${NC} is created in Folder 'questions'."