require 'spec_helper'

describe "Welcomes" do
	describe "View Page" do
		it "should have the right title" do
			visit "/"			  		
			expect(page.has_content?('Hanoieasytraffic'))
		end	  	
	end  
end
