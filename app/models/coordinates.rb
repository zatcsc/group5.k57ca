class Coordinates < ActiveRecord::Base
	belongs_to :province
	validates  :logitude , numericality: {greater_than_or_equal_to: -180,less_than_or_equal_to: 180}
	validates  :latitude, numericality: {greater_than_or_equal_to: -90, less_than_or_equal_to: 90}
end
