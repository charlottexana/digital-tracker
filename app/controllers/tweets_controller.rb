class TweetsController < ApplicationController
  def index
    username = 'LLLifeguard'
    options = { :count => 5, :include_rts => true }
    @tweets = $client.user_timeline(username, options)
    @followers = $client.user
  end
end
