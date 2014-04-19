require 'spec_helper'

describe "Welcomes" do
	describe "View Page" do
		it "should have the right title" do
			visit "/welcome/map"			  		
			expect(page).to have_title("Hanoi Easy Traffic")
		end	  	

		it "should display the map" do
			visit "/welcome/map"			
			expect(page).to have_css("div#map-canvas")
		end
	
		it "should have Tim Duong bar" do
			visit "/welcome/map"			
			expect(page).to have_css("div.findroute")
		end
	
		it "should have Danh Sach Un Tac bar" do 
			visit "/welcome/map"
			expect(page).to have_css("div.traffic-jam")
		end
	
		it "should have collapse when click in TimDuong bar" do
			visit "/welcome/map"
			expect(page).to have_css("div#feature1")			
		end	
	
		it "should have Danh Sach Un Tac bar" do 
			visit "/welcome/map"
			expect(page).to have_css("div.traffic-jam")
		end

		it "should have collapse when click in TimDuong bar" do
			visit "/welcome/map"
			expect(page).to have_css("div#feature1")			
		end		

		it "should have map div" do
			visit "/welcome/map"
			expect(page).to have_css("div#map-canvas",:visible => true)						
		end		

		it "should have search box" do
			visit "/welcome/map"
			expect(page).to have_css("input#pac-input",:visible => true)
		end
	end			
	describe "About Us page" do
		it "should have right title" do
			visit "/welcome/about"
			expect(page).to have_title("About Us")
		end
		it "should have content 'About Us' " do
			visit"/welcome/about"
			expect(page).to have_content("About Us");
		end
		it "should have Project name" do
			visit "/welcome/about"
			expect(page).to have_content("Project : Hanoi Easy Traffic")
		end
		it "should have 'Languages and Frameworks'" do
			visit "/welcome/about"
			expect(page).to have_content("Languages and Frameworks")
		end		
	end
end
