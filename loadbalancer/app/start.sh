#!/bin/bash
pm2 start /app/hearthbeat.js
pm2 start /app/updateConf.js
/app/apache.sh
pm2 monit
