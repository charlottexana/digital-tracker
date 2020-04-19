require 'twitter'
# require 'yaml'

# $client = Twitter::REST::Client.new do |config|
#   config.consumer_key        = "twitter_consumer_key"
#   config.consumer_secret     = "twitter_consumer_key_secret"
#   config.access_token        = "twitter_access_token"
#   config.access_token_secret = "twitter_access_token_secret"
# end

# tweets = client.user_timeline('LLLifeguard', count: 10)


$client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV['CONSUMER_KEY']
  config.consumer_secret     = ENV['CONSUMER_SECRET']
  config.access_token        = ENV['ACCESS_TOKEN']
  config.access_token_secret = ENV['ACCESS_SECRET']
end
