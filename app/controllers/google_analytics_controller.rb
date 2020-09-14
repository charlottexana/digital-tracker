class GoogleAnalyticsController < ApplicationController
  def index
    @googleanalytics = Ga.all
  end
end
