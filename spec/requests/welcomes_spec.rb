require 'spec_helper'

describe "Welcomes" do
	describe "View Page" do
		it "should have the right title" do
			visit "/welcome/map"			  		
			expect(page).to have_title("Hanoi Easy Traffic")
		end	  	
	end  
	describe "Wiew Page" do
		it "should display the map" do
			visit "/welcome/map"			
			expect(page).to have_css("div#map-canvas")
		end
		
	end
	describe "View Page" do 
		it "should have search box" do
			visit "/welcome/map"
			expect(page).to have_css("div#map-canvas",:visible => true)						
		end		
		it "should have search box" do
			visit "/welcome/map"
			expect(page).to have_css("input#pac-input",:visible => true)
		end
	end
end
