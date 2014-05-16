require 'spec_helper'

describe 'AboutProject' do
  it "displays the information about the project" do
    visit '/'
    click_link "About us"
    expect(page).to have_content("About Us")
  end
end
