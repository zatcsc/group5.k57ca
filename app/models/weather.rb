class Weather < ActiveRecord::Base	
	belongs_to :provinces
	DayREG = /Mon|Tue|Wed|Thu|Fri|Sat|Sun/;
	validates :day, presence: true,length:{is: 3} , format: {with: DayREG }
	validates :status, presence: true
	validates :max_temperature, numericality: {less_than_or_equal_to: 50}
	validates :min_temperature, numericality: {greater_than_or_equal_to: -50}
end
