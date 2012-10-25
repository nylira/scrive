require 'stylus'
require 'erb'

Stylus.use :nib
Stylus.compile(File.new('css/index.css.styl'))

# ignore markdown files
ignore /\/*.md/

# don't render partials
ignore /\/_.*/
