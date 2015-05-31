#Marche à suivre
* Faire un ``vagrant up`` pour démarer la VM
* Ce conecter dans la VM avec ``vagrant ssh``
* Aller dans le dossier /vagrant avec ``cd /vagrant``
* Dans ce dossier, lancer le script de construction des images: ``./build.sh``
* Démarrer ensuite les systèmes principaux: ``./start.sh``
* L'interface web de dockerui ce trouve à l'adresse ``192.168.42.42:9000``
* Les sites web se trouvent à l'adresse ``192.168.42.42``
* Un script prenant en entrée un nombre de frontend et de backend permet de rapidement lancer des containers pour tester. ``./test x y`` (où x est le nombre de frontend et y le nombre de backend)
* En allant dans le panneau de controle de dockerui, on peut controler les containers en cours d'utilisation. En utilisant *start* et *stop* on peut influancer sur le fonctionnement des containers.