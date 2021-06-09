import time
import pandas as pd
from alpha_vantage.timeseries import TimeSeries
api_key = 'GNHHDU7MXTFC09JY'

stock_symbol = input("Please, Enter in a stock that you would like to check:")
stock_symbol = stock_symbol.upper()


ts = TimeSeries(key = api_key, output_format='pandas')
data, meta_data = ts.get_intraday(symbol= stock_symbol, interval='1min', outputsize = '1year')

print(data)
