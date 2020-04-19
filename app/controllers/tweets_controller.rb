# require 'twitter'

class TweetsController < ApplicationController
  def index
    username = 'LLLifeguard'
    options = { :count => 3, :include_rts => true }
    @tweets = $client.user_timeline(username, options)
    # @tweets = client.user_timeline('LLLifegyard', count: 20)
  end
end
