#!/bin/bash
#set -x

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
LBLUE='\033[1;34m' # Light Blue
LCYAN='\033[1;36m' # Light Cyan
NC='\033[0m' # No Color

echo "git add all, commit and push at one time!"

echo -e "${LCYAN}Please enter git comment (e.g. 0001 completion):${NC}"

read comment

[[ -z "$comment" ]] && { echo -e "${RED}Error: No comments. Failed to make git commands.${NC}"; exit 1; }

git add . && git commit -m "$comment" 

git status;

echo -e "${YELLOW}----------CONTINUE----------${NC}"

echo -e "Please confirm to ${GREEN}git push (choose Yes)${NC} or to ${RED}revert above commit (choose No)${NC} [Yes(${GREEN}y${NC}); No(${RED}n${NC})]:"

read res

if [ "$res" = "y" ] || [ "$res" = "yes" ] || [ "$res" = "Yes" ] || [ "$res" = "YES" ]; then
git push; echo -e "${GREEN}git push jor! Keep fighting!!${NC}"
elif [ "$res" = "n" ] || [ "$res" = "no" ] || [ "$res" = "No" ] || [ "$res" = "NO" ]; then
git reset HEAD~1; echo -e "${RED}The git commit is reverted.${NC}"
else
git reset HEAD~1; echo -e "${RED}Invalid response. The git commit is reverted.${NC}"
fi

git status