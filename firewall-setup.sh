#!/bin/bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -j DROP
sudo iptables-save | sudo tee /etc/iptables/rules.v4
sudo apt-get install netfilter-persistent -y
sudo netfilter-persistent save
sudo netfilter-persistent reload


