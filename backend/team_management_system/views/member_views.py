from rest_framework.decorators import api_view
from ..models import Member
from django.core.serializers import serialize
from rest_framework.response import Response
from team_management_system.serializers import MemberSerializer
# from .serializers import MemberSerializer
import logging
logger = logging.getLogger('django')


from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

@api_view(['GET'])
def getMembers(request):
    members = Member.objects.all()
    # data = serialize("json", members)
    # return HttpResponse(data, content_type="application/json")
    res = MemberSerializer(members, many=True).data
    return Response(res)

@api_view(['DELETE'])
def deleteMember(request):

    data = request.data
    logger.info("*****************************")
    logger.info(data)
    logger.info("*****************************")
    pk = data['id']
    member = Member.objects.get(pk=pk)
    member.delete()
    return Response('Member Deleted')

@api_view(['PUT'])
def updateMember(request):
    data = request.data
    logger.info("*****************************")
    logger.info(data)
    logger.info("*****************************")
    pk = data['id']
    member = Member.objects.get(pk=pk)
    member.first_name = data['first_name']
    member.last_name = data['last_name']
    member.is_admin = data['is_admin']
    member.email = data['email']
    member.phone_number = data['phone_number']

    member.save()

    return Response('Member updated')

@api_view(['POST'])
def createMember(request):
    data = request.data
    # logger.info("*****************************")
    # logger.info(data)
    # logger.info("*****************************")

    member = Member.objects.create(
        first_name = data['first_name'],
        last_name = data['last_name'],
        phone_number = data['phone_number'],
        email = data['email'],
        is_admin = data['is_admin'],
    )

    return Response('Member created')