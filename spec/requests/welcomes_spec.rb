require 'spec_helper'

describe "Welcomes" do
	describe "View Page" do
		it "should have the right title" do
			visit home_path			  		
			expect(page).to have_title("Sign in")
		end	  			
	end			
	describe "About Us page" do
		it "should have right title" do
			visit about_path
			expect(page).to have_title("About Us")
		end
	end
end
