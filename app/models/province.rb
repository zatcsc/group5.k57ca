class Province < ActiveRecord::Base
	has_one :coordinates
	has_one :weather
	validates :name , presence: true	
end
