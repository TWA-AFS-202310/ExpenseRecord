namespace ExpenseRecord.Utilities
{
    public class DatabaseSettings
    {
        public DatabaseSettings(string ConnectionString, string DatabaseName, string CollectionName)
        {
            this.ConnectionString = ConnectionString;
            this.DatabaseName = DatabaseName;
            this.CollectionName = CollectionName;
        }

        public DatabaseSettings()
        {

        }
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CollectionName { get; set; } = null!;
    }
}
