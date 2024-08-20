module
  class Router:
    def conn con_type, provider, asset 
      if conn_type : {
            '20': true,
            'conn': 'asyncronous',
            'provider': provider,
            'asset': 'all'
        }
      else
        return 'Connection not permitted'
      end
    end
  end
end