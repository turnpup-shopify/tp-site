#!/bin/bash
rsync -avz --delete --exclude ".git/" ./ \
  alexturn@alexturney.com:/home2/alexturn/public_html
