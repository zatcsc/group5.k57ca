require 'spec_helper'

describe "Welcomes" do
	describe "View Page" do
		it "should have the right title" do
			visit "/welcome/index"			  		
			expect(page).to have_title("Hanoieasytraffic")
		end	  	
	end  
end
