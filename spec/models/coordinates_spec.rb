require 'spec_helper'

describe Coordinates do
  pending "add some examples to (or delete) #{__FILE__}"
  before { @example = Coordinates.new(logitude: -20, latitude: 80)}
  subject {@example}
  it {should respond_to(:logitude)}
  it {should respond_to(:latitude)}
  describe "when the coordinates is out of range" do
  	 describe "with logitude is less than -180" do
  	 	before { @example.logitude=-200 }
  	 	it {should_not be_valid}
  	 end
  	 describe "with logitude is greater than 180" do
  	 	before { @example.logitude = 200}
  	 	it {should_not be_valid}
  	 end  	 
  	 describe "with latitude is less than -90" do
  	 	before {@example.latitude = -100 }
  	 	it {should_not be_valid}
  	 end
  	 describe "with latitude is greater than 90" do
  	 	before {@example.latitude = 100}
  	 	it {should_not be_valid}
  	 end  	 
  end
  describe "when the coordinates is in rage" do
  	before do
  	 @example.logitude = 0;
  	 @example.latitude = 0;
  	end  	
  	it "should be valid" do
  		expect(@example).should be_valid
  	end
  end
end
