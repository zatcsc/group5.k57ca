require 'spec_helper'

describe "AuthenticationPages" do
  subject { page }
  describe "sign in" do
  	before {visit signin_path}
  	it {should have_content("Sign in")}
  	it {should have_title("Sign in")}  	
  	describe "with valid information" do
  		let(:user) { FactoryGirl.create(:user) }
  		before do
        User.create(name:"Nguyen Thac Thong",email:"nguyenthacthong@gmail.com",
          password: "123456",password_confirmation:"123456")
  		  fill_in "Email", :with => user.email.upcase
  		  fill_in "Password", :with => user.password
  		  click_button "Sign in"
  		end
		it {should have_link("Profile", href: user_path(user))}
		it {should have_link("Sign out", href: signout_path)}
		it {should_not have_link("Sign in",href: signin_path)}
  	end
    describe "with invalid information" do
      before { click_button "Sign in" }

      it { should have_title('Sign in') }
      it { should have_selector('div.error') }

      describe "after visiting another page" do
        before { click_link "About" }
        it { should_not have_selector('div.error_explanation') }
      end
    end  	
  end
end
