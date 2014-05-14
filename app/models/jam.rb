class Jam < ActiveRecord::Base
  validates :lat, :lng, numericality: true
  validates :reason, presence: true
end
