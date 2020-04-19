require 'twitter'
require 'yaml'

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = "ZBakGB87nijFCZMc97rG4fxz2"
  config.consumer_secret     = "NkvsisbmLvxqwqVnxduHyyOMsV5HT33Qg19SWl3C9ekVHj0oj2"
  config.access_token        = "1168473279520301056-KuReMUODcm8I2YstZQijvWbaYJnseP"
  config.access_token_secret = "IeQD5e47x1BTgoPDOzoJnECqtH2zf17gnbvrzws0dAzwN"
end

tweets = client.user_timeline('LLLifeguard', count: 10)

File.write('tweets.yml', YAML.dump(tweets))
tweets = YAML.load_file('tweets.yml')
