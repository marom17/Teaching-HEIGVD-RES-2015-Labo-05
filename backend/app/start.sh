#!bin/bash
pm2 start -x /home/script/apache.sh
pm2 start /app/hearthbeat.js
pm2 monit
