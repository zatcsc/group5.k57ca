require 'spec_helper'
describe "Hanoi Easy Traffic" do
	describe "Home page" do
		it "should have the right title" do
			visit "/welcome/map"			  		
			expect(page).to have_title("Hanoi Easy Traffic | Home")
		end	  	
		it "should display Map" do							
			visit "/welcome/map"	
			expect(page).should have_css('div.container-fluid')
		end
		it "should have searchBox" do
			visit "/welcome/map" 
			expect(page).should have_css("input#pac-input",:visible => true)
		end
   		it 'contains add details' do
   			visit "/welcome/map"
        	expect(page).should have_selector('img[alt="Logo"]')
    	end				
	end  
end