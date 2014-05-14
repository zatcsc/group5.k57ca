class WelcomeController < ApplicationController
  def home

  end

  def about
    render "about"
  end

  def contact
    render "contact"
  end

  def submit
    @jam_places = Jam.all
    render "submit"
  end

  def add
    new_jam = Jam.create(:lat => params[:jam_lat], :lng => params[:jam_lgn], :reason => params[:jam_reason])
    if !new_jam.valid?
      flash[:error] = new_jam.errors.full_messages.join(" ").html_safe
    end
    redirect_to :action => 'submit'
  end

  def map
    if signed_in?
      @jam_places = Jam.all
      render 'map'
    else
      redirect_to signin_path
    end
  end
end
