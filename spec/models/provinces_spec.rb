require 'spec_helper'

describe Province do
  pending "add some examples to (or delete) #{__FILE__}"
  before do
    @example_coordinates = Coordinates.new(logitude: 14,latitude: 30)
    @example_date = Date.new(2014,7,5)
    @example_weather = Weather.new(day: "Mon",current_date: @example_date,
    status: "Cold, windy",min_temperature: 6,max_temperature: 200)
    @example = Province.new(name: "Nghe An")
  end  
  subject{@example}
  it {should respond_to(:name)}
  describe "when name is blank" do    	
  	before {@example.name = ''}
  	it {should_not be_valid}
  end  
end
