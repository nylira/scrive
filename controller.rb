require 'stylus'
require 'erb'

Stylus.use :nib
Stylus.compile(File.new('css/index.css.styl'))

ignore /\/*.md/
