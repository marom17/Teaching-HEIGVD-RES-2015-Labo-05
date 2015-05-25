#!bin/bash
pm2 start /app/hearthbeat.js
pm2 start /app/updateConf.js
pm2 monit
