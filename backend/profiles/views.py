from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import StudentProfile, TPOProfile, CompanyProfile
from .serializers import StudentProfileSerializer, TPOProfileSerializer, CompanyProfileSerializer

class StudentProfileCreateView(APIView):
    def post(self, request):
        serializer = StudentProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentProfileDetailView(APIView):
    def get_object(self, id):
        try:
            return StudentProfile.objects.get(id=id)
        except StudentProfile.DoesNotExist:
            return None

    def get(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = StudentProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = StudentProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Pofile not found"}, status=status.HTTP_404_NOT_FOUND)
        profile.delete()
        return Response({"message": "Profile deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    
    
class TPOProfileCreateView(APIView):
    def post(self, request):
        serializer = TPOProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TPOProfileDetailView(APIView):
    def get_object(self, id):
        try:
            return TPOProfile.objects.get(id=id)
        except TPOProfile.DoesNotExist:
            return None

    def get(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = TPOProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = TPOProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Pofile not found"}, status=status.HTTP_404_NOT_FOUND)
        profile.delete()
        return Response({"message": "Profile deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    

class CompanyProfileCreateView(APIView):
    def post(self, request):
        serializer = CompanyProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CompanyProfileDetailView(APIView):
    def get_object(self, id):
        try:
            return CompanyProfile.objects.get(id=id)
        except CompanyProfile.DoesNotExist:
            return None

    def get(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CompanyProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CompanyProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        profile = self.get_object(id)
        if not profile:
            return Response({"error": "Pofile not found"}, status=status.HTTP_404_NOT_FOUND)
        profile.delete()
        return Response({"message": "Profile deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
