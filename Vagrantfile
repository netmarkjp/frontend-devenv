# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  vhosts = [
    {"name" => "frontend-devenv", "ip" => "192.168.39.10", "cpu" => 2, "memory" => 1024, "box" => "bento/ubuntu-14.04"},
  ]
  vhosts.each do |vhost|
    config.vm.box = vhost["box"] || "bento/centos-7.1"
    config.vm.define vhost["name"] do |sv|
      sv.vm.hostname = vhost["name"]
      sv.vm.network "private_network", ip: vhost["ip"]
      # sv.vm.network "forwarded_port", guest: 80, host: 8080
      # sv.vm.network "private_network", ip: "192.168.33.10"
      # sv.vm.network "public_network"
      # sv.vm.synced_folder "../data", "/vagrant_data"
      sv.vm.provider "virtualbox" do |vb|
        vb.cpus = vhost["cpu"]
        vb.memory = vhost["memory"]
        vb.gui = vhost["gui"] || false 
        vb.customize ["modifyvm", :id, "--ioapic", "on"]
        vb.customize "pre-boot", [
           "storageattach", :id,
           "--storagectl", "IDE Controller",
           "--port", "1",
           "--device", "1",
           "--type", "dvddrive",
           "--medium", "emptydrive",
        ]
      end
    end
  end
  # config.vm.provision "shell", inline: <<-SHELL
  #   apt-get update ; apt-get -y install ansible
  # SHELL
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "playbook.yml"
    ansible.verbose = "vvvv"
  end
end
