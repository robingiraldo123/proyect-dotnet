using Microsoft.EntityFrameworkCore.Migrations;

namespace crud_react.Migrations
{
    public partial class SecondCreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "DbClientes",
                type: "nvarchar(200)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DbFacturas",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    n_factura = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    id_cliente = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    id_producto = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    fecha = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    IVA = table.Column<string>(type: "nvarchar(16)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DbFacturas", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "DbProveedores",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    ramo = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    description = table.Column<string>(type: "nvarchar(300)", nullable: true),
                    frecuencia = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    persona_contacto = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    phone_number = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    direccion = table.Column<string>(type: "nvarchar(200)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DbProveedores", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DbFacturas");

            migrationBuilder.DropTable(
                name: "DbProveedores");

            migrationBuilder.DropColumn(
                name: "description",
                table: "DbClientes");
        }
    }
}
