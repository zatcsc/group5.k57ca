require 'spec_helper'

describe Weather do
  pending "add some examples to (or delete) #{__FILE__}"

  before {
    @current_date = Date.new(2014,5,9)
    @example = Weather.create(day: "Monday",current_date: @current_date ,status: "Kho rao, hoi am",min_temperature: 18,max_temperature: 25)}
  subject {@example}
  it {should respond_to(:day)}  
  it {should respond_to(:current_date)}
  it {should respond_to(:min_temperature)}
  it {should respond_to(:max_temperature)}
  describe "when day is not valid" do       
  	describe "when day is blank" do
  	 	before{@example.day = '' }
  	 	it {should_not be_valid}
  	end  	
  	describe "when day is not a day of week" do  	  	
  		before {@example.day ="not a day"}
  		it {should_not be_valid}
  	end  	
  end     
  describe "when day is valid" do
  	before {@example.day = "Mon"}
  	it {should be_valid}
  end  
  describe "when min_temperature is not valid" do
  	before {@example.min_temperature = -50}  	
  	it {should_not be_valid}
  end
  describe "when max_temperature is not valid" do
  	before {@example.max_temperature = 100}
  	it {should_not be_valid}
  end
  describe "when status is blank " do
  	before {@example.status = ''}
  	it {should_not be_valid}
  end
end
