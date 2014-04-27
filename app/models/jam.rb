class Jam < ActiveRecord::Base
  validates :latitude, numericality: true
  validates :longtitude, numericality: true
end
