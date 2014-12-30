# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # use ubuntu trusty64 box (v14)
  config.vm.box = "ubuntu-trusty64-virtualbox.box"

  # give a hostname to the box
  config.vm.hostname = "dev"

  # forward http-server port to guest
  config.vm.network "forwarded_port", guest: 8000, host: 8000

  # fix annoying messages about stdin
  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

  # run the installation script
  config.vm.provision "shell", path: "./install-env.bash"
  #config.vm.provision "shell", inline: "bash /vagrant/install-env.bash 2>&1 | tee /vagrant/install-env.log"

end
