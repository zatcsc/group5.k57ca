require 'open-uri'
class WelcomeController < ApplicationController
  def home
  end

  def about
    render 'about'
  end

  def contact
    render 'contact'
  end

  def map
    if signed_in?
      render 'map'
    else
      redirect_to signin_path
    end
  end

  def weather
    @city_id =  params[:city_id]
    @xml_url = 'http://api.openweathermap.org/data/2.5/weather?id=' + @city_id
    @weather_xml = open(@xml_url).read
    @data = ActiveSupport::JSON.decode(@weather_xml)
    # @temp = @data['main']['temp'] - 272.15
    respond_to do |format|
      format.html { render 'weather', layout: false }
    end
  end
end
