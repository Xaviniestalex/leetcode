#!/bin/bash
#set -x
#
# Reference of color input: https://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
# Reference of emoji: https://emojipedia.org

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
LBLUE='\033[1;34m' # Light Blue
LCYAN='\033[1;36m' # Light Cyan
NC='\033[0m' # No Color

PD='👇' # Point Down
BA='🔙' # Back Arrow
SP='✨' # Sparkles
FI='🔥' # Fire
RO='🚀' # Rocket

echo -e "${SP}${SP} git add all, commit and push at one time! ${SP}${SP}"

echo -e "${LCYAN}Please enter git comment (e.g. 0001 completion):${NC}"

read comment

[[ -z "$comment" ]] && { echo -e "${RED}Error: No comments. Failed to make git commands.${NC}"; exit 1; }

git add . && git commit -m "$comment" 

git status;

echo -e "${YELLOW}---------- CONTINUE ${PD} ----------${NC}"

echo -e "Please confirm to ${GREEN}git push (choose Yes)${NC} or to ${RED}revert above commit (choose No)${NC} [Yes(${GREEN}y${NC}); No(${RED}n${NC})]:"

read res

if [ "$res" = "y" ] || [ "$res" = "yes" ] || [ "$res" = "Yes" ] || [ "$res" = "YES" ]; then
git push; echo -e "${GREEN}git push jor! ${RO}${RO} Keep fighting!! ${FI}${FI}${NC}"
elif [ "$res" = "n" ] || [ "$res" = "no" ] || [ "$res" = "No" ] || [ "$res" = "NO" ]; then
git reset HEAD~1; echo -e "${RED}The git commit is reverted.${NC}"
else
git reset HEAD~1; echo -e "${RED}Invalid response. The git commit is reverted.${NC}"
fi

git status