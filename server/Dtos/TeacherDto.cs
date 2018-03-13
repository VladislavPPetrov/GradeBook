namespace WebApi.Dtos
{
    public class TeacherDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Age { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }

        // public  * Image { get; set; } 
        public string Address { get; set;}

        public string SchoolName { get; set; }        
    }
}