using System;

public delegate double BillingStrategy(double amount);

abstract class Patient
{
    public string Name;

    protected Patient(string name)
    {
        Name = name;
    }

    public abstract double getBaseCharge();
}

class GeneralPatient : Patient
{
    public GeneralPatient(string name) : base(name) { }

    public override double getBaseCharge()
    {
        return 500;
    }
}

class HeartPatient : Patient
{
    public HeartPatient(string name) : base(name) { }

    public override double getBaseCharge()
    {
        return 1500;
    }
}

class OrthoPatient : Patient
{
    public OrthoPatient(string name) : base(name) { }

    public override double getBaseCharge()
    {
        return 700;
    }
}

class Emergency : Patient
{
    public Emergency(string name) : base(name) { }

    public override double getBaseCharge()
    {
        return 2500;
    }
}

class Patient_Management
{
    public event Action<string> BillGenerated;

    public void AdmitPatient(Patient patient, BillingStrategy billingStrategy)
    {
        double baseAmt = patient.getBaseCharge();
        double finalAmt = billingStrategy(baseAmt);
        GenerateBill(patient, finalAmt);
    }

    private void GenerateBill(Patient patient, double amt)
    {
        Console.WriteLine("\n----- BILL DETAILS -----");
        Console.WriteLine("Patient Name : " + patient.Name);
        Console.WriteLine("Total Amount : ₹ " + amt);
        Console.WriteLine("------------------------");
        if (BillGenerated != null)
            BillGenerated(patient.Name);
    }
}

class BillingStrategies
{
    public static double RegularBilling(double amt)
    {
        return amt;
    }

    public static double InsuranceBilling(double amt)
    {
        return amt * 0.7;
    }
}

class Patient_Management_System
{
    static void Main()
    {
        Patient_Management pm = new Patient_Management();
        pm.BillGenerated += NotifyAccounts;
        pm.BillGenerated += NotifyWard;

        while (true)
        {
            Console.WriteLine("Patient Management System ------");
            Console.WriteLine("1. Admit Patient");
            Console.WriteLine("2. Exit");
            Console.Write("Enter choice: ");
            int c = int.Parse(Console.ReadLine());
            if (c == 2) break;

            Console.Write("Enter patient name: ");
            string name = Console.ReadLine();

            Console.WriteLine("Select patient type:");
            Console.WriteLine("1. General");
            Console.WriteLine("2. Heart");
            Console.WriteLine("3. Ortho");
            Console.WriteLine("4. Emergency");
            Console.Write("Choice: ");
            int c2 = int.Parse(Console.ReadLine());

            Patient patient;
            if (c2 == 1)
                patient = new GeneralPatient(name);
            else if (c2 == 2)
                patient = new HeartPatient(name);
            else if (c2 == 3)
                patient = new OrthoPatient(name);
            else if (c2 == 4)
                patient = new Emergency(name);
            else
                patient = new GeneralPatient(name);

            Console.WriteLine("Select billing type:");
            Console.WriteLine("1. Regular");
            Console.WriteLine("2. Insurance");
            Console.Write("Choice: ");
            int c3 = int.Parse(Console.ReadLine());

            BillingStrategy str;
            if (c3 == 1)
                str = new BillingStrategy(BillingStrategies.RegularBilling);
            else
                str = new BillingStrategy(BillingStrategies.InsuranceBilling);

            pm.AdmitPatient(patient, str);
        }
    }

    static void NotifyAccounts(string name)
    {
        Console.WriteLine("[Accounts] Billing completed for " + name);
    }

    static void NotifyWard(string name)
    {
        Console.WriteLine("[Ward] Bed allocated for " + name);
    }
}
