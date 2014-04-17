require 'spec_helper'

describe '.aboutProject' do
  it "displays the information about the project" do
    visit '/welcome/about'
    expect(page.has_content?('About our project'))
  end
end
