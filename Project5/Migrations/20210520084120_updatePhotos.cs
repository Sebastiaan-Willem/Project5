using Microsoft.EntityFrameworkCore.Migrations;

namespace Project5.Migrations
{
    public partial class updatePhotos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsProfilePicture",
                table: "Photos",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsProfilePicture",
                table: "Photos");
        }
    }
}
