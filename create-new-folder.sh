#!/bin/bash

echo "Hello, $(whoami)!"

echo 'Please enter question no. and name (e.g. 0001-Two-Sum):'

read question

folder=./questions
template=template

cp -r $folder/$template $folder/$question

echo "Folder $question is created in Folder 'questions'."