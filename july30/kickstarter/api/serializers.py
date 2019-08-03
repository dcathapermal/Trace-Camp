from rest_framework import serializers
from api.models import Kickstarter_Campaign

class KickStarter_Campaign_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Kickstarter_Campaign
        fields = [
            #you can do '__all__' to do all the fields in the model
            'id', 'backers', 'blurb', 'pledged', 'created'
        ]